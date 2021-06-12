import { useEffect, useState } from "react";
import ReactChatBot from "react-simple-chatbot";

import {
  BizPowerSMEBusinessLoan,
  BizPowerSMEPropertyLoan,
  BizPlus,
  BizPowerReliefFinancing,
} from "src/products";

const Chatbot = () => {
  return (
    <ReactChatBot
      steps={[
        {
          id: "q1",
          message: "Hi, my name is Rob. What's yours?",
          trigger: "name",
        },
        {
          id: "name",
          user: true,
          trigger: "q2",
        },
        {
          id: "q2",
          message: `Hi {previousValue}, what number can I reach you at in the future?`,
          trigger: "phone",
        },
        {
          id: "phone",
          user: true,
          trigger: "q3",
        },
        {
          id: "q3",
          message: "What is your company name?",
          trigger: "company_name",
        },
        {
          id: "company_name",
          user: true,
          trigger: "q4",
        },
        {
          id: "q4",
          message: "What is your SSM registration number?",
          trigger: "ssm",
        },
        {
          id: "ssm",
          user: true,
          trigger: "q5",
        },
        {
          id: "q5",
          message: "What does your business need financing for today?",
          trigger: "type",
        },
        {
          id: "type",
          options: [
            { value: "business", label: "Business", trigger: "q6" },
            { value: "property", label: "Property", trigger: "q6" },
            { value: "relief", label: "Relief", trigger: "q6" },
          ],
        },
        {
          id: "q6",
          message: "Does the management team own at least 50% of the company?",
          trigger: "mgmt_ownership",
        },
        {
          id: "mgmt_ownership",
          options: [
            { value: true, label: "Yes", trigger: "q7" },
            { value: false, label: "No", trigger: "q7" },
          ],
        },
        {
          id: "q7",
          message: "Do Malaysians own at least 51% of the company?",
          trigger: "msian_ownership",
        },
        {
          id: "msian_ownership",
          options: [
            { value: true, label: "Yes", trigger: "q8" },
            { value: false, label: "No", trigger: "q8" },
          ],
        },
        {
          id: "q8",
          message: "What type of business entity is your company?",
          trigger: "business_entity",
        },
        {
          id: "business_entity",
          options: [
            { value: "sole_proprietor", label: "Sole Proprietor", trigger: "q9" },
            { value: "partnership", label: "Partnership", trigger: "q9" },
            { value: "private_limited_company", label: "Private Limited Company", trigger: "q9" },
            { value: "public_limited_company", label: "Public Limited Company", trigger: "q9" },
            { value: "limited_liability_company", label: "Limited Liability Company", trigger: "q9" },
          ],
        },
        {
          id: "q9",
          message: "Has your business been operating for more than 2 years?",
          trigger: "op_duration",
        },
        {
          id: "op_duration",
          options: [
            { value: true, label: "Yes", trigger: "q10" },
            { value: false, label: "No", trigger: "q10" },
          ],
        },
        {
          id: "q10",
          message: "What is your company's estimated annual income?",
          trigger: "income",
        },
        {
          id: "income",
          user: true,
          trigger: "q11",
        },
        {
          id: "q11",
          message: "What is the estimated value for your company's assets?",
          trigger: "balance",
        },
        {
          id: "balance",
          user: true,
          trigger: "processing",
        },
        {
          id: "processing",
          message: "Please give me a second to find the best product for you.",
          trigger: "end",
        },
        {
          id: "end",
          component: <Products />,
          asMessage: true,
          end: true,
        }
      ]}
    />
  );
}

const ProductType = {
  Business: "business",
  Property: "property",
  Relief: "relief",
}

const Products = ({ steps }) => {
  const { type } = steps;
  const products = [
    BizPowerSMEBusinessLoan,
    BizPowerSMEPropertyLoan,
    BizPlus,
    BizPowerReliefFinancing
  ];

  const [productType, setProductType] = useState();
  const [bestProduct, setBestProduct] = useState(null);

  const getProducts = (productType) => {
    let max = 0;
    let maxProduct;

    products.filter(product => product.type === productType).map(product => {
      let count = getCount(product);
      if (count > max) {
        max = count;
        maxProduct = product;
      }
    })

    if (max > 0) setBestProduct(maxProduct);
    else setBestProduct(-1);
  }

  const getCount = (product) => {
    let count = 0;
    product.requirements.forEach(req => {
      if (steps[req]?.value) count++;
    });
    return count;
  }

  const renderView = () => {
    if (bestProduct === null) return;
    if (bestProduct === -1) {
      return (
        <p>Sorry, you are not eligible for any of our products at the moment.</p>
      )
    } else {
      return (
        <p>The best product for you is {bestProduct?.name}.</p>
      )
    }
  }

  useEffect(() => {
    if (steps) {
      if (type.value === ProductType.Business) setProductType(ProductType.Business);
      if (type.value === ProductType.Property) setProductType(ProductType.Property);
      if (type.value === ProductType.Relief) setProductType(ProductType.Relief);
    }
  }, [steps])

  useEffect(() => {
    if (productType) getProducts(productType);
  }, [productType])

  return (
    <>{renderView()}</>
  )
}

export default Chatbot;