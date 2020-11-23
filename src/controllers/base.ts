import Api from '../common/twakeapi'
import User from "../models/user";
import UserProfile from "../models/user_profile";



/**
 * The Base controller
 */
export default class {
    public readonly userProfile?: UserProfile
    private _api?: Api

    /**
     * @param {object} userProfile
     */
    constructor(userProfile?: UserProfile) {
        this.userProfile = userProfile
    }

    /**
     * getter for api property
     * @return {Api}
     */
    get api(): Api {
        if (!this._api) {
            this._api = new Api(this.userProfile)
        }
        return this._api
    }
}
