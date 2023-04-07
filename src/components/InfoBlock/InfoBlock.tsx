import React from "react";
import background from "assets/images/Background.png";
import poster from "assets/images/8.png";
import styles from "components/InfoBlock/index.module.scss";

import { Text } from "components/common/Text";

export const InfoBlock = () => {
   return (
      <div className={styles.wrapper}>
         <img src={background} alt="background" className={styles.background}/>
         <div className="container">
            <div className={styles.generalInfo}>
               <img src={poster} alt="background"/>
               <div className={styles.infoText}>
                  <Text
                     fontSize="40px"
                     lineHeight="46px"
                     color="#ffffff"
                     margin="0px 0 8px 0"
                  >
                     Insomnia
                  </Text>
                  <Text
                     fontSize="20px"
                     lineHeight="23px"
                     color="#E0E0E0"
                     margin="0px 0 16px 0"
                     fontWeight="400"
                  >
                     Drama Movies
                  </Text>
                  <div className={styles.infoYearTime}>
                     <Text
                        fontSize="24px"
                        lineHeight="28px"
                        color="#ffffff"
                        margin="0px 41px 0px 0"
                     >
                        2002
                     </Text>
                     <Text
                        fontSize="24px"
                        lineHeight="28px"
                        color="#ffffff"
                        margin="0px 0 0px 0"
                     >
                        154 min
                     </Text>
                  </div>
                  <Text
                     fontSize="24px"
                     lineHeight="150%"
                     color="#E0E0E0"
                     margin="0px 0 0px 0"
                     fontWeight="400"
                  >
                     A police detective goes to an Alaskan town to investigate the killing of a teenaged girl. The main suspect plays a psychological game of cat and mouse with him, jeopardising his own mental stability.
                  </Text>
               </div>
            </div>
         </div>
      </div>
   );
};