using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpVerseAPI.Models;

namespace TrumpVerseAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TrumpStaffController : ControllerBase
{
    private readonly TrumpVerseContext _context;

    public TrumpStaffController(TrumpVerseContext context)
    {
        _context = context;
    }

    // Henter alle ansatte -> databasen
    [HttpGet]
    public async Task<ActionResult<List<TrumpStaff>>> Get()
    {
        try
        {
            List<TrumpStaff> staff = await _context.TrumpStaffs.ToListAsync();
            return Ok(staff);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, 
                "An error occurred while retrieving staff members.");
        }
    }
    // Henter en ansatt basert på ID -> spesifisert ID
    [HttpGet("{id}")]
    public async Task<ActionResult<TrumpStaff>> GetById(int id)
    {
        try
        {
            var staff = await _context.TrumpStaffs.FindAsync(id);

            if (staff == null)
            {
                return NotFound($"No staff member found with ID {id}");
            }
         return Ok(staff);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, 
                "An error occurred while retrieving the staff member.");
        }
    }

    // Oppretter en ny ansatt -> default bildet uten valg -> ansatt til databasem
    [HttpPost]
    public async Task<ActionResult<TrumpStaff>> Post(TrumpStaff newStaff)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(newStaff.ProfilePicture))
            {
                newStaff.ProfilePicture = "/images/default.jpg";
            }

            _context.TrumpStaffs.Add(newStaff);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = newStaff.ID }, newStaff);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, 
                "An error occurred while creating the staff member.");
        }
    }


    // Oppdaterer en eksisterende ansatt -> henter eksesterende ansatt
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, TrumpStaff updatedStaff)
    {
        if (id != updatedStaff.ID)
        {
            return BadRequest("ID mismatch.");
        }

        try
        {
            var existingStaff = await _context.TrumpStaffs.FindAsync(id);

            if (existingStaff == null)
            {
                return NotFound($"No staff member found with ID {id}");
            }

            // Oppdaterer informasjon om den ansatte
            existingStaff.FirstName = updatedStaff.FirstName;
            existingStaff.LastName = updatedStaff.LastName;
            existingStaff.Gender = updatedStaff.Gender;
            existingStaff.Role = updatedStaff.Role;
            existingStaff.Email = updatedStaff.Email;
            existingStaff.PhoneNumber = updatedStaff.PhoneNumber;
            existingStaff.DateOfHire = updatedStaff.DateOfHire;
            existingStaff.IsActive = updatedStaff.IsActive;
            existingStaff.ProfilePicture = updatedStaff.ProfilePicture;

            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, 
                "An error occurred while updating the staff member.");
        }
    }

    // Sletter en ansatt basert på ID -> henter ansatt basert på ID -> fjerner fra databasen
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            var staff = await _context.TrumpStaffs.FindAsync(id);

            if (staff == null)
            {
                return NotFound($"No staff member found with ID {id}");
            }

            _context.TrumpStaffs.Remove(staff);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError, 
                "An error occurred while deleting the staff member.");
        }
    }
}