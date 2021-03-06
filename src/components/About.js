import React from 'react'
import MediaQuery from 'react-responsive'
export default function About() {
    return (
        <section id="about">
            <MediaQuery minWidth={700}>
            <div className='glass-container'>
        <h2>ERIC LEIBERMAN</h2>
        <article>
        <h3>ARTISTIC STATEMENT</h3>
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
        
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={700}>
        <div className='glass-container-mobile'>
        <h2>ERIC LEIBERMAN</h2>
        <article>
        <h3>ARTISTIC STATEMENT</h3>
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
        
        </div>
        </MediaQuery>
        </section>
    )
}
