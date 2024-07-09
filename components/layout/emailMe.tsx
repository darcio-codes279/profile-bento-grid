import React from 'react'
import { CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';
import { Mail } from 'lucide-react'
import { metadata } from '@/app/metadata';

const EmailMe = () => {

    const copyEmail = () => {
        navigator.clipboard.writeText(metadata.section[1].email)
        alert("Email copied!")
    }
    return (
        <div className="flex flex-col justify-center p-3 space-x-1 items-center">
            <HoverCard>
                <HoverCardTrigger>
                    <Button onClick={copyEmail}><Mail /></Button>

                </HoverCardTrigger>
                <HoverCardContent>
                    <p className="text-center">Send me an e-mail</p>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}

export default EmailMe