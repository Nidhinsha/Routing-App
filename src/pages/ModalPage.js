import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
function ModalPage() {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accepet</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        this is the modal that you are looking for
    </Modal>


    return (
        <div >
             <Button primary onClick={handleClick}> open Modal</Button>
            { showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut quam leo. Nullam risus justo, semper non ullamcorper in, imperdiet non nibh. Cras non felis pretium, fermentum ante ac, mattis sem. Sed in gravida quam. Donec faucibus porta lacus, ac ultrices magna ullamcorper in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum dictum pulvinar. Praesent dictum in elit nec ullamcorper. Duis dictum purus a elit fermentum, vitae maximus lectus luctus. Curabitur leo felis, finibus pellentesque dui quis, rutrum elementum tortor. Morbi dapibus vitae justo sit amet interdum. Phasellus vitae dictum nisl. Sed et placerat magna, vel cursus nunc.
            </p>

           
        </div>
    )
}

export default ModalPage
