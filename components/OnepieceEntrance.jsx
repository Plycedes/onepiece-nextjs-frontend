"use client";

import { useWeb3Contract } from "react-moralis";
import { abi, localAddress } from "@constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function OnepieceEntrance() {
    const { isWeb3Enabled } = useMoralis();
    const [entranceFee, setEntranceFee] = useState("0");

    const { runContractFunction: enterOnePieceRace } = useWeb3Contract({
        abi: abi,
        contractAddress: localAddress,
        functionName: "enterOnePieceRace",
        params: {},
        msgValue: entranceFee,
    });

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: localAddress,
        functionName: "getEntranceFee",
        params: {},
    });

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const entranceFee = (await getEntranceFee()).toString();
                setEntranceFee(entranceFee);
            }
            updateUI();
        }
    }, [isWeb3Enabled]);

    return (
        <div>
            <div>
                <button
                    onClick={async function () {
                        await enterOnePieceRace();
                    }}
                >
                    Enter One Piece Race
                </button>
            </div>
            <div>Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH</div>
        </div>
    );
}
