import {
  API
} from "homebridge";
import { PLATFORM_NAME } from "./constants";
import HomebridgeWizLan from "./wiz";
 
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, HomebridgeWizLan as any);
};