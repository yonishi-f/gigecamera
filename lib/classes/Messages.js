import ACTION_ACK from './messages/ACTION_ACK';
import DATA_LEADER from './messages/DATA_LEADER';
import DATA_PAYLOAD from './messages/DATA_PAYLOAD';
import DATA_TRAILER from './messages/DATA_TRAILER';
import DISCOVERY_ACK from './messages/DISCOVERY_ACK';
import GVCP_ACK from './messages/GVCP_ACK';
import GVSP_ACK from './messages/GVSP_ACK';
import READMEM_ACK from './messages/READMEM_ACK';
import READREG_ACK from './messages/READREG_ACK';
import WRITEMEM_ACK from './messages/WRITEMEM_ACK';
import WRITEREG_ACK from './messages/WRITEREG_ACK';

const MESSAGES = {
    ACTION_ACK : ACTION_ACK,
    DATA_LEADER : DATA_LEADER,
    DATA_PAYLOAD : DATA_PAYLOAD,
    DATA_TRAILER : DATA_TRAILER,
    DISCOVERY_ACK : DISCOVERY_ACK,
    GVCP_ACK : GVCP_ACK,
    GVSP_ACK : GVSP_ACK,
    READMEM_ACK : READMEM_ACK,
    READREG_ACK : READREG_ACK,
    WRITEMEM_ACK : WRITEMEM_ACK,
    WRITEREG_ACK : WRITEREG_ACK
};

export  { MESSAGES as default };