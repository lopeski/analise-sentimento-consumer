export interface IUsecase<T = void, R = void> {
  execute(input: T): R;
}
