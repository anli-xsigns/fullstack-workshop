﻿namespace Lesson3.Types;

[QueryType]
public static class Query
{
    public static IEnumerable<Book> GetAllBooks(BookRepository repository)
        => repository.GetAllBooks();
    
    public static Book? GetBookById(int id, BookRepository repository)
        => repository.GetBookById(id);
    
    public static IEnumerable<Author> GetAllAuthors(AuthorRepository repository)
        => repository.GetAllAuthors();
}
