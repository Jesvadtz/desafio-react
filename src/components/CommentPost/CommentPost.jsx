import React from "react"

function CommentPost(props) {
    const { text } = props
    return (

        <div class="d-flex align-items-start gap-3">
            <img src="/assets/user-02.webp" alt="User" width="32" height="32" class="rounded-circle" />
            <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0 text-secondary user-date">Rajvir Singh · <span>Dec 5</span></p>
                        <button class="btn p-0 d-flexr">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="an88o4nwn24yl5uidc7mdcfxwuynh40u" class="crayons-icon pointer-events-none align-items-cente">
                                <title id="an88o4nwn24yl5uidc7mdcfxwuynh40u">Dropdown menu</title>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p class="card-text mt-2">{text}</p>

                </div>
            </div>
        </div>

    )
}

export default CommentPost;