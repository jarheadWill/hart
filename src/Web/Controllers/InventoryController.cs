using Data.Repository;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InventoryController : Controller
{
    private readonly ILogger<InventoryController> _logger;
    private readonly IInventoryRepository _inventoryRepository;

    public InventoryController(ILogger<InventoryController> logger, IInventoryRepository inventoryRepository)
    {
        _logger = logger;
        _inventoryRepository = inventoryRepository;
    }
    
    [HttpGet]
    public async Task<IEnumerable<Product>> GetInventory()
    {
        return await _inventoryRepository.GetProductsAsync();
    }

    [HttpPost]
    public async Task<bool> TimerComplete()
    {
        return true;
    }
}