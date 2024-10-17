import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'AnimeBot',
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you with anime sets.`)],
  widgets: [],
};

export default config;
