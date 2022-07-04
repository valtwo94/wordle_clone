import React from "react";
import GlobalStore from "./GlobalStore";

interface IStoreContext {
    globalStore: GlobalStore;
}

const globalStore = new GlobalStore();

export const StoreContext = React.createContext<IStoreContext>({
    globalStore,
});