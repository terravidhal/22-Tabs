import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';



const Tabs = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  
  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
    animateTabToggle(index)
  }


  const animateTabToggle = (index) => {
    const currentTab = document.querySelector(`.tb.${tabStyle(currentTabIndex)}`);
    const selectedTab = document.querySelector(`.tb.${tabStyle(index)}`);

    currentTab.classList.add("fadeOut");
    selectedTab.classList.add("fadeIn");

    setTimeout(() => {
      currentTab.classList.remove("fadeOut");
      currentTab.classList.remove("selectedTab");
      selectedTab.classList.remove("fadeIn");
      selectedTab.classList.add("selectedTab");
    }, 500);
  };

  
  return (
    <div style={{ margin: "auto", width: "85%", textAlign: "left"}}>

      {
        allTabs.map((item, index) => (
          <div className={`tab tb ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
            { item.title }
          </div>
        ))
      }
    </div>
  )
}

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
