import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext()

export const QuoteProvider = ({ children }) => {

   
    const initialstate = {
        quotes: {
            _id: "JNs1fSaN1K",
            content: "Always keep your mind as bright and clear as the vast sky, the great ocean, and the highest peak, empty of all thoughts. Always keep your body filled with light and heat. Fill yourself with the power of wisdom and enlightenment.",
            author: "Morihei Ueshiba",
            tags: [
                "Wisdom"
            ],
            authorSlug: "morihei-ueshiba",
            length: 228,
            dateAdded: "2019-09-23",
            dateModified: "2023-04-14"
        }

        
    }
    const [state, dispatch] = useReducer(QuoteReducer, initialstate)
    return (
        <QuoteContext.Provider value={{...state,dispatch}}>{children}</QuoteContext.Provider>
    )
}
export default QuoteContext