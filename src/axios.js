import Axios from "axios";


const instance = Axios.create({
    validateStatus: function validateStatus(status) {
        let default_ = status >= 200 && status < 300;
        let extra = status === 302
        return default_ || extra
    }
});

export default instance;
