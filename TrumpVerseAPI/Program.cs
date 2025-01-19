using Microsoft.EntityFrameworkCore;
using TrumpVerseAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAnyOrigin",
        policies => policies
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        );
    }
);

builder.Services.AddDbContext<TrumpVerseContext>( options => options.UseSqlite( "Data Source=TrumpVerse.db" ) );
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("api-documentation.html");
app.UseDefaultFiles(options);

app.UseStaticFiles();

app.UseCors("AllowAnyOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
