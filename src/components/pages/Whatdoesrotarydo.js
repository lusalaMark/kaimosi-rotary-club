// import React from "react";
// import "./Whatdoesrotarydo.css";
// import Centercontentwhatdoesrotarydo from "./Centercontentwhatdoesrotarydo";
// import Sidebarcontentwhatdoesrotarydo from "./Sidebarcontentwhatdoesrotarydo";

// export default function Whatdoesrotarydo() {
//   return (
//     <div className="whatdoesrotarydo">
//       <div className="whatdoesrotarydo__heading">
//         <h1>RELATED PAGE</h1>
//       </div>
//       <div className="whatdoesrotarydo__contentbody">
//         <Sidebarcontentwhatdoesrotarydo />
//         <Centercontentwhatdoesrotarydo />
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Whatdoesrotarydo.css";
import Sidebarcontentwhatdoesrotarydo from "./Sidebarcontentwhatdoesrotarydo";
import Centercontentkaimosirotaryserviceprojects from "./Centercontentkaimosirotaryserviceprojects";

export default function Whatdoesrotarydo() {
  return (
    <div className="Kaimosirotaryserviceprojects__contact">
      <div className="Kaimosirotaryserviceprojects__heading">
        <h1>What does Rotary do?</h1>
      </div>
      <div className="Kaimosirotaryserviceprojects__contentbody">
        <Sidebarcontentwhatdoesrotarydo />
        <Centercontentkaimosirotaryserviceprojects />
      </div>
    </div>
  );
}
