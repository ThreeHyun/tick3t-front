import axios from "axios";

const USERLIST_URL = "https://46920bcd-a7ef-4ebe-8f4a-509a2967d14d.mock.pstmn.io/"
export default {
    getUserList: function(pageNo) {
        return axios.get(USERLIST_URL + `admin?page=${pageNo}`)
    }
}

// const CONCERTDETAIL_URL = "https://46920bcd-a7ef-4ebe-8f4a-509a2967d14d.mock.pstmn.io/"
// export default {
//     getConcertDetail: function(resultCode) {
//         return axios.get(CONCERTDETAIL_URL + `concert/${resultCode}`)
//     }
// }