export interface ControleRemoto{
    play(): void;
    pause(): void;
}

export interface ControleSom extends ControleRemoto {
    mudarRadio(): void;
}

export class BlueRay implements ControleRemoto {
    play(): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }
}

export class Som implements ControleSom {
    mudarRadio(): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }
    pause(): void {
        throw new Error("Method not implemented.");
    }
}