import React, {useState} from 'react';
import Icon from '../others/Icon'
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='arrow-bottom-outer'>
        <div onClick={scrollToTop} className='arrow-bottom-inner' style={{opacity: visible ? 1 : 0, zIndex: visible ? 20 : -1000}}>
            <Icon data="far fa-arrow-up" />
        </div>
    </div>
  );
}
  
export default ScrollButton;