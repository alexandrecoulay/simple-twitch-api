import RequestEmitter from "../Utils/EventEmitter";
import type { clientData } from "./interfaces/Global";

// dans mon cas pour les streams : stream.online
class Oauth2Manager extends RequestEmitter {
    constructor(data: clientData) {
      super(data);
    }

}

export default Oauth2Manager;