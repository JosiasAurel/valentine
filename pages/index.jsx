import React, { useState } from "react"
import Image from "next/image"

import styles from "../styles/index.module.css"

const Index = () => {
    const [msg, setMsg] = useState("")
    function sendMsg(e) {
        let fMsg = JSON.stringify(msg)
        e.preventDefault()
                fetch("/api/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: fMsg
                })
    }
    return (
        <>
        
        <main>
            <div>
                <h1 className={styles.hero}>Hey 👋, I Love You so Much</h1>
            <div className={styles.imageContainer}>
                <Image src="/heart.png" width="200px" height="200px" />
            </div>
            </div>
        </main>

        <div className={styles.msgC}>
            <form onSubmit={sendMsg}
             action="#" className={styles.form}>
                <input 
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                type="text" 
                placeholder="Send me a love message" />
                <button type="submit">
                    Send 💝
                </button>
            </form>
        </div>
        </>
    )
}

export default Index