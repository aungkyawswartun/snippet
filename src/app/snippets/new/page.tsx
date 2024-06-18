'use client'

import { useFormState } from "react-dom";
import * as actions from '@/actions';

export default function SnippetCreatePage() {

    const [formState , action ] = useFormState(actions.createSnippet, {message : ''})

    return (
        <form action={action}>
            <h3 className="font-bold text-xl m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input className="border rounded p-2 w-full" name="title" id="title" />
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">code</label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code" />
                </div>
                {
                    formState.message ? <div className="my-2 p-2 border-red-400 bg-red-200 rounded">{formState.message}</div> : null
                }
                <button type="submit" className="rounded p-2 bg-blue-200">Save</button>
            </div>
        </form>
    )
}