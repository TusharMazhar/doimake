import {useState,useEffect} from 'react'
import '../style.scss'

const DoiMakeForm = () => {
    const [totalMilk,setTotalMilk] = useState(0)
    const [sugar,setSugar] = useState('')
    const [caramel,setcaramel] = useState('')
    const [curd,setcurd] = useState('')

    const ltrChangeHandler = (e)=>{
        setTotalMilk(e.target.value)
    }
    return (
        <div className='container'>
            <div className='wrapper'>
                <h1>মিষ্টি দই তৈরী করতে আপনি কত লিটার দুধ নিয়েছেন?</h1>
                <input type="number" value={totalMilk} onChange={ltrChangeHandler} />
                <span>লিটার</span>
                <div className='ingredients'> 
                    <table>
                        <tr>
                            <th>দুধ</th>
                            <th>চিনি</th>
                            <th>ক্যারামেল</th>
                            <th>দই</th>
                        </tr>
                        <tr>
                            <td>{totalMilk} লিটার দুধ (কাপে হিসাব করে নিন)</td>
                            <td>{totalMilk/2} কাপ এবং ১ কাপের, চার ভাগের এক ভাগ চিনি </td>
                            <td>{totalMilk} টেবিল চামচ চিনি এবং {totalMilk/2} কাপ দুধ</td>
                            <td>{totalMilk} কাপ দই (পানি ছাড়িয়ে নিন ভাল করে)</td>
                        </tr>
                    </table>
                </div>
                <div className='makeDoiStep'> 
                    <h3 className='title'>মিষ্টি দই বানানোর নিয়ম</h3>
                    <div className='making'>
                         <p className='step'>১ম ধাপঃ</p>
                         # {totalMilk} টেবিল চামচ চিনি,একটা পাত্রে হাল্কা তাপে গলিয়ে নিন এবং বাদামী কালার হওয়ার সাথে সাথে {totalMilk/2} কাপ দুধ মিশিয়ে গরম করে একটা পাত্রে রেখে দিন। 
                    </div>
                    <div className='making'>
                        <p className='step'>২য় ধাপঃ</p>
                         # {totalMilk} লিটার দুধ,{totalMilk*10} মিনিট গরম করুন
                    </div>
                    <div className='making'>
                         <p className='step'>৩য় ধাপঃ</p>
                         # {totalMilk} লিটার দুধ গরম করার ফলে কিছু কমে যাবে এরপর, {totalMilk/2} কাপ এবং ১ কাপের, চার ভাগের এক ভাগ চিনি দুধে ঢেলে দিন এবং সাথে আগে তৈরী করার ক্যারামেলও মিশিয়ে আরোও {(totalMilk*10)/2} মিনিট গরম করুন।
                    </div>
                    <div className='making'>
                        <p className='step'>৪র্থ ধাপঃ</p>
                         # গরম করা দুধ ঠান্ডা করে নিন (একদম ঠান্ডা করবেন না,উষ্ণ গরম রাখুন)
                    </div>
                    <div className='making'>
                        <p className='step'>৫ম ধাপঃ</p>
                         # {totalMilk} কাপ দই  ভাল করে ছড়িয়ে এর মধ্যে মিক্স করা দুধ আসতে আসতে ঢেলে মিশিয়ে নিন এবং পরে বাটিতে ঢেলে কাপড় দিয়ে ঢেকে রেখে দিন ৬-৭ ঘন্টা।
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoiMakeForm