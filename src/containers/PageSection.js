/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

class PageSection extends Component {
    render() {
        return (
            <div className='App'>
            <div className='TestDiv1'>
                <h1 className='sub-header'>About</h1>
                <div className='sub-img'>
                Img:
                <img height='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfsXdO0cC7vOKUHMVW6jZEJGu6KagmspPlAR1fT3LgANHGNwI'/>
                </div>
                <div className='sub-text'>
                Fourscore and seven years ago our fathers brought forth, on this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived, and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting-place for those who here gave their lives, that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we cannot dedicate, we cannot consecrate—we cannot hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom, and that government of the people, by the people, for the people, shall not perish from the earth.
                </div>
            </div>
            {/* <div className='TestDiv2'></div> */}
            </div>
        )
    }
}

export default PageSection