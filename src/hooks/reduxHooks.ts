import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, RootDispatch } from "../store/store";

export const AppDispatch = ()=> useDispatch<RootDispatch>()
export const AppSelector: TypedUseSelectorHook<RootState> = useSelector