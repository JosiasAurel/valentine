import React, { useState } from "react"
import Image from "next/image"
import { Modal } from "@geist-ui/react"

import styles from "../styles/index.module.css"

const Index = () => {
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    function sendMsg(e) {
        let fMsg = JSON.stringify(msg)
        e.preventDefault()
                fetch("/api/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: fMsg
                }
	)
    }
	
    return (
        <>
        
        <main>
	    <Modal>
	    <Modal.Title>
	    Thank You
	    </Modal.Title>
	    <Modal.Content>
	    Message Sent
	    </Modal.Content>
	    <Modal.Action passive onClick={() => setOpen(false)}>
	    Close
	    </Modal.Action>
	    </Modal>
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
                <button 
	    type="submit"
	    onClick={() => setOpen(true)}>
                    Send 💝
                </button>
            </form>
        </div>
        </>
    )
}

export default Index
