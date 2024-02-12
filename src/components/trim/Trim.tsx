import React from 'react'
import axios from 'axios'
import { GiBoxCutter } from 'react-icons/gi'

// const res = await https://api.shrtco.de/v2/shorten?url=${input}
// setResult(res.data.result.full_short_link)

export default function Trim() {
    const [url, setURL] = React.useState('')
    const [shortenedURL, setShortenedURL] = React.useState('')

    function userURL(event: any) {
        setURL(event.target.value)
    }
    // function newUserURL() {
    //     setShortenedURL(url.substring(0, Math.floor(Math.random() * url.length)))
    // }
    const newUserURL = async () => {
        try {
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`)
            setShortenedURL(res.data.result.full_short_link2)
        }
        catch (err) {
            console.log('Error messgae:', err)
        }
    } 





    return (
        <div className=' xl:mt-32 lg:mt-28 md:mt-24 sm:mt-20 xs:mt-16 xl:py-24 lg:py-20 md:py-16 sm:py-14 xs:py-12 sm:px-0 xs:px-6 bg-deepblue flex items-center justify-center mb-8'>
            <div className='flex bg-tertiary xl:px-8 lg:px-4 md:px-2 xs:px-1 xl:pt-16 lg:pt-12 md:pt-11 sm:pt-10 xs:pt-9 xl:pb-20 lg:pb-14 md:pb-12 sm:pb-11 xs:pb-10 flex-col items-center justify-center rounded-2xl'>
                <div className='text-primary '>
                    <input className=' border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-4 md:pl-3 xs:pl-2 lg:pr-52 md:pr-48 sm:pr-48 xs:pr-24 rounded-2xl border-secondary' type="text" value={url} onChange={userURL} placeholder='Place URL here...' />
                </div>
                <div className='flex sm:flex-row xs:flex-col sm:items-start xs:items-center  gap-3 mt-6'>
                    <div className=''>
                        <select className=' border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-4 md:pl-3 xs:pl-2 lg:pr-10 md:pr-9 sm:pr-8 xs:pr-36  rounded-2xl border-secondary' name="Domain" id="1">
                        <option value="1">Choose Domain</option>
                        <option value="2">Scissor.com</option>
                        <option value="3">Add Domain</option>
                        </select>
                    </div>
                    <div><input className=' border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-4 md:pl-3 xs:pl-2 sm:pr-0 xs:pr-24 rounded-2xl border-secondary' type="text" placeholder='Type Alias here' /></div>
                </div>
                <button className='flex items-center md:gap-7 sm:gap-6 xs:gap-5 justify-center text-tertiary bg-secondary md:px-36 sm:px-32 xs:px-24 lg:py-4 md:py-3 sm:py-2 xs:py-1 sm:rounded-3xl xs:rounded-2xl md:mt-6 sm:mt-5 xs:mt-4 sm:mb-8 xs:mb-7' onClick={newUserURL}> <span className=''>Trim URL</span> <span className=''><GiBoxCutter /></span></button>
                <div className=' text-secondary xl:w-full lg:w-2/4 sm:w-2/3 sm:px-0 xs:px-2 sm:text-base xs:text-sm '>By clicking TrimURL, I agree to the <span className='md:font-semibold sm:font-medium'>Terms of Service</span>, <span className='md:font-semibold sm:font-medium'>Privacy Policy</span> and Use of Cookies.</div>

            </div>
            {shortenedURL && <div className=''> <div gsu-texthead>Generated Shortened URL:</div> <div gsu-text>{shortenedURL}</div></div>}

        </div>
    )
}






