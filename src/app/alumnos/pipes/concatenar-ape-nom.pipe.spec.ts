import { ConcatenarApeNomPipe } from '../../cursos/pipes/concatenar-ape-nom.pipe';

describe('ConcatenarApeNomPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenarApeNomPipe();
    expect(pipe).toBeTruthy();
  });
});
