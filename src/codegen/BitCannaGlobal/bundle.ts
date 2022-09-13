import * as _0 from "../bcna/bitcannaid";
import * as _1 from "../bcna/genesis";
import * as _2 from "../bcna/params";
import * as _3 from "../bcna/query";
import * as _4 from "../bcna/supplychain";
import * as _5 from "../bcna/tx";
import * as _146 from "../bcna/tx.amino";
import * as _147 from "../bcna/tx.registry";
import * as _148 from "../bcna/query.lcd";
import * as _149 from "../bcna/query.rpc.query";
import * as _150 from "../bcna/tx.rpc.msg";
import * as _247 from "./lcd";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace BitCannaGlobal {
  export namespace bcna {
    export const bcna = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150
    };
  }
  export const ClientFactory = { ..._247,
    ..._248,
    ..._249
  };
}