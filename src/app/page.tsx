'use client'
import React from 'react'
import CollaborationPlatform from '@/component/CollaborationPlatform'
import TalentBridge from '@/component/TalentBridge'
import BecomeSolution from '@/component/BecomeSolution'
import ReachabilityAssistance from '@/component/ReachabilityAssistance'

const page = () => {
    return (
        <>
            <CollaborationPlatform />
            <TalentBridge />
            <BecomeSolution />
            <ReachabilityAssistance />
        </>
    )
}

export default page
