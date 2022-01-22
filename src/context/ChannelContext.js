import { createContext } from "react";

const ChannelContext = createContext()

const ChannelProvider = ChannelContext.Provider
const ChannelConsumer = ChannelContext.Consumer

export { ChannelProvider, ChannelConsumer, ChannelContext }