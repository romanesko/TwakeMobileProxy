import Api from "../../common/twakeapi";

export default class CompaniesService {
    constructor(protected api: Api) {
    }

    async badges(company_id: string, all_companies: boolean): Promise<Array<{ [key: string]: string }>> {
        let response = (await this.api.get(
            '/internal/services/notifications/v1/badges',
            {company_id, all_companies}
        )).resources || {}

        return response
    }

    async applications(company_id: string) {
        return this.api.post('/ajax/workspace/group/apps/get', {
            "group_id": company_id
        }).then(a => a.data.map((a: any) => a.app))
    }
}
