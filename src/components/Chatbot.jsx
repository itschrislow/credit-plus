import ReactChatBot from "react-simple-chatbot";

const Chatbot = () => {
  return (
    <ReactChatBot
      steps={[
        {
          id: "1",
          message: "Hi, my name is Rob. What's yours?",
          trigger: "2",
        },
        {
          id: "2",
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          message: "How can I contact you in the future?",
          trigger: "4",
        },
        {
          id: "4",
          user: true,
          trigger: "5",
        },
        {
          id: "5",
          message: "What is your company name?",
          trigger: "6",
        },
        {
          id: "6",
          user: true,
          trigger: "7",
        },
        {
          id: "7",
          message: "What is your SSM registration number?",
          trigger: "8",
        },
        {
          id: "8",
          user: true,
          trigger: "9",
        },
        {
          id: "9",
          message: "What does your business need financing for today?",
          options: [
            { value: "Business", label: "Business", trigger: "10" },
            { value: "Property", label: "Property", trigger: "10" },
            { value: "Relief", label: "Relief", trigger: "10" },
          ],
        },
        {
          id: "10",
          message: "Does the management team own at least 50% of the company?",
          options: [
            { value: 0, label: "Yes", trigger: "11" },
            { value: 1, label: "No", trigger: "13" },
          ],
        },
        {
          id: "11",
          message: "Do Malaysians own at least 51% of the company?",
          options: [
            { value: 0, label: "Yes", trigger: "12" },
            { value: 1, label: "No", trigger: "13" },
          ],
        },
        {
          id: "12",
          message: "Has your business been operating for more than 2 years?",
          options: [
            { value: 0, label: "Yes", trigger: "13" },
            { value: 1, label: "No", trigger: "13" },
          ],
        },
        {
          id: "13",
          message: "Sorry, you are not eligible for any of our loans at the moment.",
          trigger: "1",
        }
      ]}
    />
  );
}

export default Chatbot;