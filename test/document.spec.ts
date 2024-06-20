import Document from '../src/document';

describe('Document', () => {
  it('Can create a document from GEDCOM file', async () => {
    const document = new Document();
    await document.fromGedcomFile('./test/fixtures/555SAMPLE2.GED');

    expect(document).toBeInstanceOf(Document);
  })
})