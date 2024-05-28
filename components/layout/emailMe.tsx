import React from 'react'
import { CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';
import { Mail } from 'lucide-react'
import { metadata } from '@/app/metadata';

const EmailMe = () => {
    return (
        <>
            <CardContent className="text-sm max-pb-2">
                <p>{metadata.section[5].description}</p>
            </CardContent>
            <CardFooter className="place-content-center space-x-4">

                <HoverCard>
                    <HoverCardTrigger>
                        <Button><Mail /></Button>

                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p className="text-center">Send me an e-mail</p>
                    </HoverCardContent>
                </HoverCard>
            </CardFooter>
        </>
    )
}

export default EmailMe