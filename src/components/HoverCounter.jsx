import withCounter from "./withCounter";

function HoverCounter({name, count, incrementCount}) {
    return (
        <div onMouseOut={incrementCount}>
            {name} hovered {count} times
        </div>
    )
}

export default withCounter(HoverCounter, 5);