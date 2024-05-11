import React from 'react'
import { SiBuymeacoffee } from 'react-icons/si'
import { Button } from '../ui/button'

const BuyMeCoffee = () => {
    return (
        <div className='flex flex-col justify-center p-3 space-x-1 items-center'>
            <h1 className="text-xl text-center text-pretty pb-2">Buy me a coffee</h1>
            <div>
                <Button>
                    <div><SiBuymeacoffee size={30} /></div>
                </Button>
            </div>
        </div>
    )
}

export default BuyMeCoffee