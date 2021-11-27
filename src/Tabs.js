import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
 

class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }

      render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          <div className="tabs">
            <ol className="tab-list">
              {children.map((child) => {
                const { label } = child.props;
    
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
            <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
        );
      }
    }

    
    export default Tabs;









































// import React, { useState } from "react";
// import "./Tabs.css";

// const Tabs = () => {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//     console.log(index);
//   };
//   return (
//     <div className="container">
//       <div className="block-tabs">
//         <div
//           className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(1)}
//         >
//           Tab1
//         </div>
//         <div
//           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(2)}
//         >
//           Tab2
//         </div>
//       </div>
//       <div className="content-tabs">
//         <div
//           className={toggleState === 1 ? "content active-content" : "content"}
//         >
//           <h1>Tab1</h1>
//           <p>sahgdfsjdjgdgdehk</p>
//         </div>
//         <div
//           className={toggleState === 2 ? "content active-content" : "content"}
//         >
//           <h1>Tab2</h1>
//           <p>sahgdfsjdjgdgdehk</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;
