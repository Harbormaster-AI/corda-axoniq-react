import axios from 'axios';

const CORDA_API_BASE_URL = "http://localhost:8011/Automobile";

class CordaService {

    bulkCreateTokens(automobile, party) {
        return axios.put(CORDA_API_BASE_URL + '/bulkCreateTokens?partyEnum=' + party, automobile );
    }

    bulkDestroyTokens(automobile, party) {
        return axios.put(CORDA_API_BASE_URL  + '/bulkDestroyTokens?partyEnum=' + party, automobile);
    }

    bulkTransferTokens(automobile, party) {
        return axios.put(CORDA_API_BASE_URL  + '/bulkTransferTokens?partyEnum=' + party, automobile );
    }

    issueNew(automobile, party) {
        return axios.put(CORDA_API_BASE_URL  + '/issueNew?partyEnum=' + party, automobile );
    }

    flows(party){
        return axios.get(CORDA_API_BASE_URL + '/flows?partyEnum=' + party);
    }

    networkParameters(party){
        return axios.get(CORDA_API_BASE_URL + '/networkParameters?partyEnum=' + party);
    }

    notaryIdentities(party){
        return axios.get(CORDA_API_BASE_URL + '/notaryIdentities?partyEnum=' + party);
    }

    nodeInfo(party){
        return axios.get(CORDA_API_BASE_URL + '/nodeInfo?partyEnum=' + party);
    }

    nodeDiagnosticInfo(party){
        return axios.get(CORDA_API_BASE_URL + '/nodeDiagnosticInfo?partyEnum=' + party);
    }

    vaultQuery(party){
        return axios.get(CORDA_API_BASE_URL + '/vaultQuery?partyEnum=' + party);
    }
}

export default new CordaService()
