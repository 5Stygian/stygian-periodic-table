'use client'

import { invoke } from '@tauri-apps/api/core';
import { ReactElement, useEffect, useState } from 'react';

export default function Greet(): ReactElement {
    const [greet, setGreet] = useState<string>('');

    useEffect(() => {
        invoke<string>('greet', { greet: 'DEV' }).then((result) => {
            setGreet(result);
        });
    }, []);

    return <span>{greet}</span>;
}
