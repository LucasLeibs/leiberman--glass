import React, {useState} from 'react'
import MediaQuery from 'react-responsive'
 import headshot from '../images/glass/dad.jpg'
export default function About() {
    const [readMore, openMore] = useState(false)
    const x = <svg onClick={() => openMore(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
    return (
        <section id="about">
            <MediaQuery minWidth={700}>
            <div className='glass-container'>
            
        <article>
       
        <h2>ERIC LEIBERMAN</h2>
        <br></br>
        <p>" My work represents an exploration into my fascination with natural forms, and the profound influence they 
            have in our lives. 
            We depend upon plants for sustenence and the air we breathe. 
            They have the power to heal the sick, poison the unwary, and alter the state of human conciousness. 
            Flowers are given to communicate what words alone cannot: expressions of love or grief,  
            celebrations of birth and marriage. 
            We have used plants, actually, or symbolically, in worship and spiritual rituals since our beginning. 
            <br></br>
            <br></br>
            In my work, I try to communicate my inspiration; the beauty and the mystery of the natural world. 
            The fluid motion of glass and the application of color are used to represent the myriad patterns present in nature. 
            Surface textures produced from techniques such as sandblasting, acid etching, and the use of the precious metals evoke 
            veins in a leaf, the subtle intricacy of a coiling vine, or the exhuberance of tropical blossoms. "

             </p>
        </article>
        <div className="about-picture-container">
            <img src={headshot}></img>
            <span>
           
           <p>Eric now resides and maintains a studio on Whidbey Island, some 35
                miles North of Seattle, Washington. His work is shown in galleries nationwide.</p>
                </span>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={700}>
        <div className='glass-container-mobile'>
      
        <article>
            {readMore ? <div className="read-more-container-mobile"><button className="read-less-button">{x}</button><p>" My work represents an exploration into my fascination with natural forms, and the profound influence they 
            have in our lives..."

            We depend upon plants for sustenence and the air we breathe. 
            They have the power to heal the sick, poison the unwary, and alter the state of human conciousness. 
            Flowers are given to communicate what words alone cannot: expressions of love or grief,  
            celebrations of birth and marriage. 
            We have used plants, actually, or symbolically, in worship and spiritual rituals since our beginning.  
             <br></br>
           
            In my work, I try to communicate my inspiration; the beauty and the mystery of the natural world. 
            The fluid motion of glass and the application of color are used to represent the myriad patterns present in nature. 
            Surface textures produced from techniques such as sandblasting, acid etching, and the use of the precious metals evoke 
            veins in a leaf, the subtle intricacy of a coiling vine, or the exhuberance of tropical blossoms. " 
             </p></div> : ''}
        <h2>ERIC LEIBERMAN</h2>
     
        <p>" My work represents an exploration into my fascination with natural forms, and the profound influence they 
            have in our lives..."

            {/* We depend upon plants for sustenence and the air we breathe. 
            They have the power to heal the sick, poison the unwary, and alter the state of human conciousness. 
            Flowers are given to communicate what words alone cannot: expressions of love or grief,  
            celebrations of birth and marriage. 
            We have used plants, actually, or symbolically, in worship and spiritual rituals since our beginning.  */}
            {/* <br></br>
            <br></br>
            In my work, I try to communicate my inspiration; the beauty and the mystery of the natural world. 
            The fluid motion of glass and the application of color are used to represent the myriad patterns present in nature. 
            Surface textures produced from techniques such as sandblasting, acid etching, and the use of the precious metals evoke 
            veins in a leaf, the subtle intricacy of a coiling vine, or the exhuberance of tropical blossoms. " */}

             </p>
             <button onClick={() => openMore(true)} className="read-more-button">Read More <svg id="read-more-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
        </article>
        <div className="about-picture-container-mobile">
            <img src={headshot}></img>
            <span>
           
           <p>Eric now resides and maintains a studio on Whidbey Island, some 35
                miles North of Seattle, Washington. His work is shown in galleries nationwide.</p>
                </span>
        </div>
        
        </div>
        </MediaQuery>
        </section>
    )
}
