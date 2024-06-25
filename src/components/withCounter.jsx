import { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    function WithCounter(props) {
        const [count, setCount] = useState(0);

        function incrementCount() {
            setCount(count + incrementNumber);
        }

        return <WrappedComponent {...props} name="jil" count={count} incrementCount={incrementCount} />
    }
    return WithCounter;
}

export default withCounter;