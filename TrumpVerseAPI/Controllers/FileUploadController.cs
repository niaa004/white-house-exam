using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;

namespace TrumpVerseAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FileUploadController : ControllerBase
{
    private readonly IWebHostEnvironment _webHostEnvironment;

    public FileUploadController(IWebHostEnvironment webHostEnvironment)
    {
        _webHostEnvironment = webHostEnvironment;
    }

    // Endpoint for å få tilgjengelige standardbilder 
    [HttpGet("available-images")]
    public IActionResult GetAvailableImages()
{
    var webRootPath = _webHostEnvironment.WebRootPath; 
    var imagesFolder = Path.Combine(webRootPath, "images");

    // Henter alle bilder fra mappen -> wwwroot -> images
    var imageFiles = Directory.GetFiles(imagesFolder)
        .Select(filePath => $"/images/{Path.GetFileName(filePath)}")
        .ToList();

    return Ok(imageFiles);
}

    // Endpoint for å laste opp en fil
    [HttpPost]
    public async Task<IActionResult> Post(IFormFile file)
    {
        // Validerer filinput NOT 0
          if (file == null)
    {
        return BadRequest("No file uploaded.");
    }

    // Validerer at filen NOT 0
    if (file.Length == 0)
    {
        return BadRequest("The file is empty.");
    }

    // Validerer at filen er en gyldig bildet
    if (!file.ContentType.StartsWith("image/"))
    {
        return BadRequest("Invalid file type. Only images are allowed.");
    }

    try
    {
            // Angir sti til images -> wwwroot
            string webRootPath = _webHostEnvironment.WebRootPath;
            string absolutePath = Path.Combine(webRootPath, "images", file.FileName);

            // Lagrer filen 
            using (var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            // Returnerer URL for den opplastede filen
            string fileUrl = $"/images/{file.FileName}";
            return Created("", new { FileUrl = fileUrl });
        }
        catch (Exception ex)
        {
            // Logger og returnerer feil dersom noe går galt
            return StatusCode(500, $"An error occurred while uploading the file: {ex.Message}");
        }
    }
}