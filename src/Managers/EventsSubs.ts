import EventEmitter from "../Utils/EventEmitter";
import type { clientData } from "./interfaces/Global";

class EventSub extends EventEmitter {

    constructor(data: clientData) {
        super(data);

    }

    /**
     * @link https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription
     */
    public async create() {

    }



}

export default EventSub;