import React from "react";

interface ILifeCicleProps {
  someProp?: number;
}

interface ILifeCicleState {
  stateField?: number;
}

export default class LifeCicle extends React.Component<
  ILifeCicleProps,
  ILifeCicleState
> {
  constructor(props: ILifeCicleProps) {
    super(props);
    this.state = { stateField: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  static getDerivedStateFromProps(
    props: Readonly<ILifeCicleProps>,
    state: Readonly<ILifeCicleState>
  ) {}
  public render() {
    return <div onClick={this.handleClick}>1</div>;
  }

  private handleClick = () => {
    this.setState({ stateField: 1 });
  };

}
