export type FetchUserParameters = {
    /**
     * @max 100 
     */
    user_id?: Array<string>,
    /**
     * @max 100
     */
    login_name?: Array<string>
}

type fetchUser = {
    "id": string,
    "login": string,
    "display_name": string,
    "type": "staff" | "admin" | "global_mod" | "",
    "broadcaster_type": "partner" | "affiliate" | "",
    "description": string,
    "profile_image_url": string,
    "offline_image_url": string,
    "view_count": number,
    /**
     * @requires user:read:email
     */
    "email": string,
    "created_at": string
}

export type JSONfetchUser = {
    data: Array<fetchUser>
}