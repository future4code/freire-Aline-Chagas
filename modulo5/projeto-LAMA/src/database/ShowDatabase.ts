import { Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    createShow = async (show:Show)=>{
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .insert({
            id:show.getId(),
            band:show.getBand(),
            starts_at: show.getStartsAt()
        })
    }
}