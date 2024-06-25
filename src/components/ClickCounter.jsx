import withCounter from "./withCounter";

function ClickCounter({name, count, incrementCount}) {
    return (
        <button onClick={incrementCount}>
           {name} Clicked {count} times
        </button>
    )
}

export default withCounter(ClickCounter, 10);